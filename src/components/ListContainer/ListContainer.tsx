import React, { useContext, useRef } from 'react'
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'
import { ListContext } from '../../ListContext'
import Card from '../Card/Card'

const ListContainer: React.FC = () => {
	const cache = useRef(new CellMeasurerCache({
		fixedWidth: true,
		defaultHeight: 100
	}))
	const [state] = useContext(ListContext)
	const questions = state.questions



	if (!state.error && questions.length === 0) {
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>Loading ...</h2>
			</div>
		)
	} else if (state.error) {
		return (
			<div style={{ textAlign: 'center' }}>
				<h2>Something went wrong!</h2>
			</div>
		)
	}

	return (
		<div style={{ width: '100%', height: '80vh' }}>
			<AutoSizer>
				{({ width, height }) => (
					<List
						width={width}
						height={height}
						rowHeight={cache.current.rowHeight}
						deferredMeasurementCache={cache.current}
						rowCount={questions.length}
						rowRenderer={({ key, index, style, parent }) => {
							const question = questions[index]

							return (
								<CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
									<div style={style}>
										<Card
											author={question.owner.display_name}
											title={question.title}
											body={question.body}
											link={question.link}
											creationDate={question.creation_date}
											key={question.question_id}
										/>
									</div>
								</CellMeasurer>
							)
						}}
					/>
				)}
			</AutoSizer>
		</div>
	)
}

export default ListContainer
